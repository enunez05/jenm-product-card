# JENM-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jesus Eduardo Nuñez Marquez - Jenson

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