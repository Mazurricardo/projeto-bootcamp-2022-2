import AddBuyButton from '../../icons/AddBuyButton';
import AddDeleteButton from '../../icons/AddDeleteButton';
import AddEditButton from '../../icons/AddEditButton';
import imagem1 from './imagens/IM1.png';

function Products({product}) {
  return(

    <div className="pai">
      <figure>
        <img className={`img${product.id}`} src={product.img} alt="camera" />
      </figure>
      <div className='Description'>
        <h1 className='ProductName'>{product.name}</h1>
        <h2 className='ProductBrand'>{product.brand}</h2>
        <h2 className='ProductColor'>{product.color}</h2>
        <h2 className='ProductPrice'>{product.price}</h2>
      </div>
      <div className='PaiIcones'> 
      <div onClick={()=>console.log('buy')}>
      <AddBuyButton />
        </div>
      <div onClick={()=>console.log('edit')}>
      <AddEditButton />
        </div>
      <div onClick={()=>console.log('delete')}>
      <AddDeleteButton />
        </div>
      
      
      
      
      
      </div>
    </div>
  

  )
}

export default Products
