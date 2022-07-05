import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';

const Home = () => {

    const [products] = useProducts();

    return (

        <>
            <Container>

                <h2 className='text-center text-info'> Total product Available {products.length} </h2>

                <Row>
                    <Col>
                        <Row>

                            {
                                products.map(product=> <Col md={3} key={product._id}> 
                                
                                                            <div className="shadow rounded py-2 text-center">
                                                                <img className='w-100 rounded' height='250px' src={product.img} alt="" />
                                                                <h4> {product.name} </h4>
                                                                <h6> <small> ${product.price} </small> </h6>
                                                            </div>
                                                        
                                                        </Col> )
                            }

                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Home;