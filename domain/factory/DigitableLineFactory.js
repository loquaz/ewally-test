import { digitCheckerMod10 } from "../../config/IocContainer.js";
import { ENTERPRISE_DIGITABLE_LINE_SIZE, REGULAR_DIGITABLE_LINE_SIZE } from "../constants.js";
import EnterpriseDigitableLine from "../entity/EnterpriseDigitableLine.js";
import RegularDigitableLine from "../entity/RegularDigitableLine.js";

class DigitableLineFactory {

    getInstance( digitableLine ){
        switch ( digitableLine.length ) {
            case REGULAR_DIGITABLE_LINE_SIZE: return new RegularDigitableLine( digitableLine, digitCheckerMod10 )
            case ENTERPRISE_DIGITABLE_LINE_SIZE: return new EnterpriseDigitableLine( digitableLine, digitCheckerMod10 )
            default:break;
        }
    }
}

export default DigitableLineFactory