
export const Footer: React.FC = () => {

    // useEffect(() => {
        

    //     document.addEventListener('DOMContentLoaded', function () {
    //         const carousel = document.getElementById('default-carousel');
    //         const slideContainer = carousel?.querySelector('.relative');
    //         const slides = carousel?.querySelectorAll('[data-carousel-item]');
    //         const prevButton = carousel?.querySelector('[data-carousel-prev]');
    //         const nextButton = carousel?.querySelector('[data-carousel-next]');
    //         const slideIndicators = carousel?.querySelectorAll('[data-carousel-slide-to]');

    //         let currentSlide = 0;
    //         const totalSlides = slides?.length || 0;

    //         // Function to show a specific slide
    //         function showSlide(index: number) {
    //             if (index < 0 || index >= totalSlides) return;

    //             slides?.forEach(slide => {
    //                 slide.classList.add('hidden');
    //             });
    //             slides?.[index]?.classList.remove('hidden');

    //             // Update slide indicators
    //             slideIndicators?.forEach(indicator => {
    //                 indicator.setAttribute('aria-current', 'false');
    //             });
    //             slideIndicators?.[index]?.setAttribute('aria-current', 'true');

    //             currentSlide = index;
    //         }

    //         // Event listeners for navigation buttons
    //         prevButton?.addEventListener('click', function () {
    //             const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    //             showSlide(prevSlide);
    //         });

    //         nextButton?.addEventListener('click', function () {
    //             const nextSlide = (currentSlide + 1) % totalSlides;
    //             showSlide(nextSlide);
    //         });

    //         // Event listeners for slide indicators
    //         slideIndicators?.forEach((indicator, index) => {
    //             indicator.addEventListener('click', function () {
    //                 showSlide(index);
    //             });
    //         });

    //         // Auto slide functionality (optional)
    //         // Uncomment this block if you want the slider to auto-advance
    //         /*
    //         function autoSlide() {
    //             const nextSlide = (currentSlide + 1) % totalSlides;
    //             showSlide(nextSlide);
    //         }

    //         const slideInterval = setInterval(autoSlide, 5000);
    //         */

    //         // Show initial slide
    //         showSlide(currentSlide);
    //     });
    // }, []);
  return (
    <>
    <footer>
        <div className="w-full bg-gray-800 text-gray-50 py-5 px-5 min-h-20 md:min-h-40 ">
            <div className="flex  justify-center items-center flex-col md:flex-row pt-10 pb-10 font-semibold">

                <a className="m-3" href="/">Home</a>
                <a className="m-3" href="/privacy">Privacy</a>
                <a className="m-3" href="/disclaimer">Disclaimer</a>
            </div>
            <div className="w-full flex  justify-center items-center text-sm border-t border-gray-500 pt-10">
Copyright &copy; 2024, All Rights Reserved            </div>
        </div>
    </footer>

   
    </>
  )
}