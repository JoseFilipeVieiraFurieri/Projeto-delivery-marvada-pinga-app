const { expect } = require('chai');
const sinon = require('sinon');
const jest = require('jest');
const { Sale, SaleProduct } = require('../../database/models');
const { getSales, getSalesById, createSale } = require('../../api/services/sales.service');

describe('Testes da camada service referente ao Sales', function () {
    afterEach(function () {
        sinon.restore();
        });
  
    it('Teste a função de trazer todas as vendas feitas', async function () {
      const sales = [{
         id: 1,
         userId: 2,
         sellerId: 3,
         totalPrice: 50,
         deliveryAddress: 'monica',
         deliveryNumber: 40,
         saleDate: '11-11-11',
         status: 'pendente',
  
      },
    {
      id: 2,
      userId: 3,
      sellerId: 4,
      totalPrice: 60,
      deliveryAddress: 'rua da igreja',
      deliveryNumber: 40,
      saleDate: '12-12-12',
      status: 'pendente',
  
    }];
  
      sinon.stub(Sale, 'findAll').resolves(sales);
  
      const result = await getSales();

      expect(result).to.be.deep.equal(sales);
    });

    it('Teste a função de trazer uma venda pelo Id', async function () {
        const id = 1;
        
        const sales = [{
           id: 1,
           userId: 2,
           sellerId: 3,
           totalPrice: 50,
           deliveryAddress: 'rua da molecada',
           deliveryNumber: 40,
           saleDate: '11-11-11',
           status: 'pendente',
    
        },
     ];
    
        sinon.stub(Sale, 'findOne').resolves(sales);
    
        const result = await getSalesById(id);
  
        expect(result).to.be.deep.equal(sales);
      });

      it('Teste a função de procurar o id quando não encontra', async function () {
        const result = await getSalesById(8);
  
        expect(result).to.be.equal(null);
      });

      it('Teste a a função de criar vendas', async function () {
        const salesMock = {
           userId: 45,
           sellerId: 23,
           productId: 41,
           totalPrice: 50,
           deliveryAddress: 'rua da balada',
           deliveryNumber: 40,
           saleDate: '11-11-11',
           status: 'pendente',
           quantity: 40,
    
        };
     
        const responseMockSale = {
            totalPrice: 50,
            deliveryAddress: 'rua da balada',
            deliveryNumber: 40,
            status: 'pendente',
            userId: 45,
            sellerId: 23,
            productId: 41,
            quantity: 40,
            saleDate: '11-11-11',
      };

      const SaleProductMock = {
        saleId: responseMockSale.id,
        productId: salesMock.productId,
        quantity: salesMock.quantity,

      };
    
        sinon.stub(Sale, 'create').resolves(salesMock);
        sinon.stub(SaleProduct, 'create').resolves(SaleProductMock);
    
        const result = await createSale(salesMock);
  
        expect(result).to.be.deep.equal(responseMockSale);
      });

      it('Teste se ocorrer algum problema durante a criação da venda', async function () {
        const salesMock = {
        totalPrice: 100,
        deliveryAddress: '123 Main St',
        deliveryNumber: 'Apt 4',
        status: 'pending',
        userId: 1,
        sellerId: 2,
        quantity: 2,
        productId: 3,
      };

        const expectedError = new Error('Ocorreu algum problema no cadastro da venda');

        sinon.stub(Sale, 'create').rejects(expectedError);

        const result = await createSale(salesMock);
        expect(result).to.be.deep.equal(expectedError);
      });
    }); 