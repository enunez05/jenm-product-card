# JENM-Testing-NPM-Publish

Testing version to npm Package 
Don't use this packag, Its for testing to publish to npm

### ENUNEZ05 - Jenson

## Ejemplo
```
import  { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jenm-product-card;

```

```
<ProductCard
    product={product}
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
```