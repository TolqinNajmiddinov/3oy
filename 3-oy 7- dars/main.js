        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navItems = document.querySelector('.nav_items');
            
            // Toggle the active class to show or hide the menu
            hamburger.addEventListener('click', function() {
                navItems.classList.toggle('active');
            });
        });
