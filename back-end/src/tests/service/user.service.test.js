const { expect } = require('chai');
const sinon = require('sinon');
const md5 = require('md5');
const { User } = require('../../database/models');
const userService = require('../../api/services/user.service');
const { generateToken } = require('../../api/utils/JWT');

describe('Testes da camada service referente ao User', function () {
    afterEach(function () {
      sinon.restore();
      });

  it('Teste a função de authenticateUser no caso do usuario não for encontrado', async function () {
    const email = 'ze@hotmail.com';
    const password = '12345678';

    sinon.stub(User, 'findOne').rejects(new Error('Usuário não encontrado'));

    try {
      userService.authenticateUser({ email, password });
    } catch (error) {
      expect((error).message).to.be.equal('Usuário não encontrado');
    }
  });

  it('Teste se o retorno esta correto com um usuario registrado no banco', async function () {
    const email = 'zebirita@email.com';
    const password = '$#zebirita#$';

    const resultMock = {
      name: 'Cliente Zé Birita',
      email,
      role: 'customer',
    };
      sinon.stub(User, 'findOne').resolves(resultMock);
    
      const result = await userService.authenticateUser({ email, password });
  
      expect(result.name).to.equal(resultMock.name);
      expect(result.email).to.equal(resultMock.email);
      expect(result.role).to.equal(resultMock.role);
      expect(result).to.have.property('token');
    });

    it('Teste se é criado um usuario corretamente', async function () {
      const createMock = {
        name: 'Joaquim',
        email: 'ClaudineiBoladao@hotmail.com',
        password: 'supermandecariacica',
        role: 'customer',
      };
      
      const customerMock = {

          id: 1,
          name: createMock.name,
          email: createMock.email,
          role: createMock.role,
        
      };

        const userStub = sinon.stub(User, 'findOrCreate').resolves([customerMock, true]);
      
        const result = await userService
        .createUser({ 
          email: createMock.email, 
          name: createMock.name, 
          password: createMock.password,
          role: createMock.role,
        });
    
        expect(userStub).to.have.been.calledOnceWith({
          where: { email: createMock.email, name: createMock.name },
          defaults: {
            name: createMock.name,
            password: md5(createMock.password),
            role: createMock.role,
          },
        });

        expect(result).to.deep.equal({
          name: createMock.name,
          email: createMock.email,
          role: createMock.role,
          token: generateToken(customerMock),
        });
    }); 

    it('Teste se ocorre uma mensagem de erro ao tentar se registrar', async function () {
      const name = 'Fulana Pereira';
      const email = 'fulana@deliveryapp.com';
      const password = 'fulana@123';
      const role = 'seller';
  
      sinon.stub(User, 'findOrCreate').rejects(new Error('Usuário já existente'));
  
      try {
        userService.createUser({ name, email, password, role });
      } catch (error) {
        expect((error).message).to.be.equal('Usuário já existente');
      }
    });
    
    it('Teste se é listado todas os usuarios', async function () {
        const userResponse = [{
          id: 1,
          name: 'Delivery App Admin',
          email: 'adm@deliveryapp.com',
          role: 'administrator',
        },
        {
          id: 2,
          name: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          role: 'seller',
        }];
      
        sinon.stub(User, 'findAll').resolves(userResponse);
      
        const result = await userService.getUsers();
    
        expect(result).to.be.deep.equal(userResponse);
      });

      it('Teste se é um usuario é deletado', async function () {
        const deleteStub = sinon.stub(User, 'destroy').resolves();

        const idDelete = 1;
      
        const result = await userService.deleteUser(idDelete);

        console.log('logresult', result);
    
        sinon.assert.calledOnce(deleteStub);

        expect(result).to.be.equal(undefined);
      });
    }); 
