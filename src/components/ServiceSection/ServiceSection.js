import './ServiceSection.scss';
import Image from '~/components/Image';
import images from '~/assets/imgs';

function ServiceSection() {
    return (
        <div className="main__services grid wide">
            <div className="main__services-list row">
                <div className="main__services-item col l-3 m-6 c-0">
                    <div className="services-item-left">
                        <Image src={images.ser_1} />
                    </div>
                    <div className="services-item-right">
                        <div className="title-services">Miễn phí giao hàng</div>
                        <div className="sumary-services">
                            Miễn phí mọi đơn hàng
                            <span className="bold-primary-color">từ 10/3-13/3</span>
                        </div>
                    </div>
                </div>
                <div className="main__services-item col l-3 m-6 c-0">
                    <div className="services-item-left">
                        <Image src={images.ser_2} />
                    </div>
                    <div className="services-item-right">
                        <div className="title-services">Thanh toán COD</div>
                        <div className="sumary-services">
                            Thanh toán khi
                            <span className="bold-primary-color">nhận hàng (COD)</span>
                        </div>
                    </div>
                </div>
                <div className="main__services-item col l-3 m-6 c-0">
                    <div className="services-item-left">
                        <Image src={images.ser_3} />
                    </div>
                    <div className="services-item-right">
                        <div className="title-services">Khách hàng VIP</div>
                        <div className="sumary-services">
                            Ưu đãi dành cho
                            <span className="bold-primary-color">khách hàng VIP</span>
                        </div>
                    </div>
                </div>
                <div className="main__services-item col l-3 m-6 c-0">
                    <div className="services-item-left">
                        <Image src={images.ser_4} />
                    </div>
                    <div className="services-item-right">
                        <div className="title-services">Hỗ trợ bảo hành</div>
                        <div className="sumary-services">
                            <span className="bold-primary-color">Đổi, sửa</span>
                            đồ tại tất cả YODY Store
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
