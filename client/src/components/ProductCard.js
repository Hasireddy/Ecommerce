export default function ProductCard({product}){
    return(
        <>
            <li key={product.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} style={{ height: '100px' }} />
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
        </li> 
        </>
    )
}