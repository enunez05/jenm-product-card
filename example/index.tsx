import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{
            count:4,
            maxCount:10,
        }}
    >
        {
            (args) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
