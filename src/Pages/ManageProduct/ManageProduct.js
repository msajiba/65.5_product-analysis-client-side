import React from 'react';
import useProducts from '../../hooks/useProducts';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {useNavigate, Link} from 'react-router-dom';

const ManageProduct = () => {

    const [products, setProducts]=  useProducts();
    const navigate = useNavigate();

    const productDeleteHandler = id => {
        const process = window.confirm('Are you sure delete product ?');
        if(process){
            const url = `https://scenic-grand-canyon-86539.herokuapp.com/product/${id}`;
            fetch(url, {
                method : 'DELETE',
            })
            .then(res=> res.json())
            .then(data=> {
                const remainig = products.filter(pro=> pro._id !== id);
                setProducts(remainig);
            })
        }
    }

    return (
        <div>
            <Container> 

            <h1 className='text-center text-info'> Manage Your Product </h1>

            <Row>
                    <Col>

                        <Row>

                            {
                                products.map(product=> <Col md={12} key={product._id}> 
                                

                                                            <div className="shadow rounded py-2 my-2 d-flex justify-content-between">
                                                                <h4 className='mx-2'> {product.name} </h4>

                                                                <div>
                                                                    <Link to={`/product/${product._id}`}>
                                                                        <Button 
                                                                                className='mx-3'
                                                                                variant='info' 
                                                                                size='sm' 
                                                                            >
                                                                                Update
                                                                        </Button>
                                                                    </Link>
                                                                    <Button 
                                                                            onClick={()=> productDeleteHandler(product._id)}
                                                                            variant='danger' size='sm
                                                                            '> 
                                                                        Delete 
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            
                                                        
                                                        </Col> )
                            }

                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ManageProduct;