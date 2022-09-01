import * as React from 'react';
import renderer from 'react-test-renderer'
import  {ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () =>{
    test(('Debe de mostrar el componente con el src del producto'), () => {
        const wrapper = renderer.create(
            <ProductImage img={product2.img} />
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });
    test('Debe de mostrar el componente padre con el componente imagen con la imagen',() => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage img={product2.img} />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    });
});
