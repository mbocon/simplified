const API_URL = 'http://localhost:3001'

const useDelete = () => {
	const handleDelete = (event, item, userId, handleUpdateAfterDelete) => {
		console.log(item, userId, 'are handle delete props')
		if (event) {
			event.preventDefault();

			fetch(`${API_URL}/api/budgets/delete/${userId}/${item._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
				.then(resp => resp.json())
				.then(data => {
					handleUpdateAfterDelete();
					// localStorage.setItem('deleted', 'true');
				})

				.catch(err => console.error(err, 'is the error'));
		}
	};

	return {
		handleDelete,
	};
};

export default useDelete;
