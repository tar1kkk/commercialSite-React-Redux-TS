import React from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/product-details.css';
import ProductCard from '../components/UI/product-card/ProductCart';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/shopping-cart/cartSlice';
import { useEffect } from 'react';

function FoodDetails() {
	const dispatch = useDispatch();
	const [tab, setTab] = useState('desc');

	const { id } = useParams();
	const product = products.find(item => item.id === id);
	const { title, price, image01, desc, category } = product;
	const [previewImg, setPreviewImg] = useState(product.image01);
	const relatedProduct = products.filter(item => category === item.category);

	const addToCart = () => {
		dispatch(addItem({
			id,
			title,
			image01,
			price
		}));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Helmet title='Product-details'>
			<CommonSection title={title} />
			<section>
				<Container>
					<Row>
						<Col lg='2' md='2'>
							<div className="product__images">
								<div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
									<img src={product.image01} alt="" className='w-50' />
								</div>
								<div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
									<img src={product.image02} alt="" className='w-50' />
								</div>
								<div className="img__item mb-3" onClick={() => setPreviewImg(product.image03)}>
									<img src={product.image03} alt="" className='w-50' />
								</div>
							</div>
						</Col>

						<Col lg='4' md='4'>
							<div className="product__main-img">
								<img src={previewImg} alt="" className='w-100' />
							</div>
						</Col>

						<Col lg='6' md='6'>
							<div className="single__product-content">
								<h2 className='product__title mb-3'>{title}</h2>
								<p className='product__price'>Price <span>$ {price}</span></p>
								<p className='category'>Category : <span>{category}</span></p>
								<button className='addTOCart__btn' onClick={addToCart}>Add to Cart</button>
							</div>
						</Col>

						<Col lg='12'>
							<div className="tabs d-flex align-items-center gap-5 py-2">
								<h6 className={`${tab === 'desc' ? 'tab__active' : ''}`} onClick={() => setTab('desc')}>Description</h6>
								<h6 className={`${tab === 'rev' ? 'tab__active' : ''}`} onClick={() => setTab('rev')}>Review</h6>
							</div>

							{
								tab === 'desc'
									?
									<div className="tab__content">
										<p>{desc}</p>
									</div>
									:
									<div className="tab__form mb-3">
										<div className="review pt-5">
											<p className="user__name mb-0">Taras Leuta</p>
											<p className='user__email'>tarasleuta@gmail.com</p>
											<p className='feedback__text'>great product</p>
										</div>


										<div className="review">
											<p className="user__name mb-0">Taras Leuta</p>
											<p className='user__email'>tarasleuta@gmail.com</p>
											<p className='feedback__text'>great product</p>
										</div>
										<form className='form'>

											<div className='form__group'>
												<input type="text" placeholder='Enter your name' />
											</div>

											<div className='form__group'>
												<input type="text" placeholder='Enter your name' />
											</div>

											<div className='form__group'>
												<textarea type="text" placeholder='Enter your name' />
											</div>
											<button type='submit' className='addTOCart__btn'>Submit</button>
										</form>
									</div>
							}
						</Col>

						<Col lg='12' className='mb-5 mt-4'>
							<h4 className='related__Product-title'>You might also like</h4>
						</Col>
						{relatedProduct.map((item) => (
							<Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
								<ProductCard item={item} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
}

export default FoodDetails;