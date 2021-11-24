import { digitCheckerMod10, digitCheckerMod11 } from "../../config/IocContainer.js";
import { ENTERPRISE_DIGITABLE_LINE_SIZE, REGULAR_DIGITABLE_LINE_SIZE } from "../constants.js";
import EnterpriseBarCode from "../entity/EnterpriseBarCode.js";
import RegularBarCode from "../entity/RegularBarCode.js";

class BarCodeFactory {

    getInstance( digitableLine ){
        switch ( digitableLine.length ) {
            case REGULAR_DIGITABLE_LINE_SIZE: return new RegularBarCode( digitCheckerMod11 )
            case ENTERPRISE_DIGITABLE_LINE_SIZE: return new EnterpriseBarCode( digitCheckerMod10 )
            default:break;
        }
    }
}

export default BarCodeFactory