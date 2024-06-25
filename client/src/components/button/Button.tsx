import { Link } from "react-router-dom";
import { ButtonModel } from "../../models/buttonModel";

const Button = (buttonModel : ButtonModel) => {
    return (
        <Link to={buttonModel.textLabel}>
            {buttonModel.textLabel}
        </Link>
    )
}

export default Button;