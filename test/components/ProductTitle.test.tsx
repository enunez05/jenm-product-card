import * as React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () =>{
    test('Debe de mostrar el componente correctamente con el titulo', () => {
        const wrapper = renderer.create(
            <ProductTitle className="product-title" title="custom product" />
        )
       expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('debe de mostrar el componente con el nombre del producto',() => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})