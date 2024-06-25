import { Link } from "react-router-dom";
import { ButtonModel } from "../../models/buttonModel";

const Button = (buttonModel : ButtonModel) => {
    return (
        <Link to={buttonModel.link}>
            {buttonModel.textLabel}
        </Link>
    )
}

export default Button;