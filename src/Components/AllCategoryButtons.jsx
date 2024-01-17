import PhoneSvg from './svgComponents/PhoneSvg';
import ComputerSvg from './svgComponents/ComputerSvg';
import CameraSvg from './svgComponents/CameraSvg';
import HeadphonesSvg from './svgComponents/HeadphonesSvg';
import GamingSvg from './svgComponents/GamingSvg';

import "../stylesheets/AllCategoryButtons.css";

const ButtonWrapper = ({ children, title }) => {

    return (
        <div className='center-child button-wrapper' style={{ flexDirection: 'column' }}>
            {children}
            <div>{title}</div>
        </div>
    )
}

export default function AllCategoryButtons() {
    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

    return (
        <div className="all-category-buttons" style={style}>
            <ButtonWrapper title="Phones">
                <PhoneSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Computers">
                <ComputerSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Cameras">
                <CameraSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Headphones">
                <HeadphonesSvg />
            </ButtonWrapper>
            <ButtonWrapper title="Gaming">
                <GamingSvg />
            </ButtonWrapper>
        </div>
    )
}