 // Populate holiday photos
 function populateHolidayPhotos() {
    const holidays = ['christmas', 'easter', 'halloween', 'birthday'];
    
    holidays.forEach(holiday => {
        const grid = document.getElementById(`${holiday}-grid`);
        const holidayPhotos = getPhotosByCategory(holiday);
        
        holidayPhotos.forEach(photo => {
            const holidayItem = document.createElement('div');
            holidayItem.className = 'holiday-item';
            holidayItem.innerHTML = `
                <div class="photo-placeholder">Photo ${photo.id}</div>
                <img src="${photo.image}" alt="${photo.title}" class="holiday-photo" />
                <div class="overlay">
                    <h3>${photo.title}</h3>
                    <p>${photo.description}</p>
                    <div class="price">$${photo.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${photo.id})">
                        Add to Cart
                    </button>
                </div>
            `;
            grid.appendChild(holidayItem);
        });
    });
}

// Initialize holiday photos
document.addEventListener('DOMContentLoaded', populateHolidayPhotos);