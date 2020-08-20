import React, { useEffect, useState } from 'react';
import { Select, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loadLocations } from './store/actions/locationAction';
const { Option } = Select;

function getChildren(result) {
	const children = [];
	if (result && result.length > 0) {
		// eslint-disable-next-line array-callback-return
		result.map((item, i) => {
			if (i < 5) {
				children.push({ ...item });
			}
		});
	}
	return children;
}
function App() {
	const dispatch = useDispatch();
	const [selectedItems, setItems] = useState([]);
	const locations = useSelector((state) => state.location.results);
	const children = getChildren(locations);
	useEffect(() => {
		dispatch(loadLocations());
	}, [dispatch]);

	const handleChange = (selectedItems) => {
		console.log(selectedItems);
		setItems(selectedItems);
	};
	const filteredOptions = children.filter(
		(o) => !selectedItems.includes(o.name + ', ' + o.admin1 + ', ' + o.country)
	);

	

	return (
		<div style={{ paddingLeft: '25%', paddingRight: '25%', paddingTop: 20 }}>
			<Card style={{ height: 300 }}>
				{/* <h3>Multiple Location Select</h3> */}
				<h4>Select location:</h4>
				<Select
					style={{ width: 400 }}
					mode='multiple'
					value={selectedItems}
					placeholder='type and search'
					onChange={handleChange}
				>
					{filteredOptions.map((item) => (
						<Option
							key={item.asl}
							value={item.name + ', ' + item.admin1 + ', ' + item.country}
						>
							{
								<div>
									{item.name},{' '}
									<span style={{ color: '#ddd' }}>{item.admin1},</span>
									<span style={{ color: '#ddd' }}>{item.country}</span>
								</div>
							}
						</Option>
					))}
				</Select>
			</Card>
		</div>
	);
}

export default App;
