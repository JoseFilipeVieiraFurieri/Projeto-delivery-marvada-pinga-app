const { expect } = require('chai');
const sinon = require('sinon');
const { Product } = require('../../database/models');
const { getProducts } = require('../../api/services/product.service');

describe('Testes da camada service referente ao Sales', function () {
    afterEach(function () {
        sinon.restore();
        });
  
    it('Teste a função de trazer todas as vendas feitas', async function () {
      const products = [{
            id: 1,
            name: 'Skol Lata 250ml',
            price: '2.20',
            urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
          
           },
         {
     
       id: 2,
       name: 'Heineken 600ml',
       price: '7.50',
       urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  
    }];
  
      sinon.stub(Product, 'findAll').resolves(products);
  
      const result = await getProducts();

      expect(result).to.be.deep.equal(products);
    });
    }); 
