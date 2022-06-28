import SliderSection from '~/components/SliderSection';
import ServiceSection from '~/components/ServiceSection';
import ProductsNewSection from '~/components/Products/ProductsNewSection';
import BannerSection from '~/components/BannerSection';
import HomeProductSection from '~/components/Products/HomeProductSection';
import BlogSection from '~/components/BlogSection';
function Home() {
    return (
        <div className="main">
            <SliderSection />
            <ServiceSection />
            <ProductsNewSection />
            <BannerSection />
            <HomeProductSection />
            <BlogSection />
        </div>
    );
}

export default Home;
