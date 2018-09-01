import Text       from '../views/elements/common/ui/card/elements/text.js';
import Image      from '../views/elements/common/ui/card/elements/image.js';
import Button     from '../views/elements/common/ui/card/elements/button.js';
import TextButton from '../views/elements/common/ui/card/elements/textButton.js';
import Input      from '../views/elements/common/ui/card/elements/input.js';
import Select     from '../views/elements/common/ui/card/elements/select.js';

const classes = {

      Text
    , Image
    , Button
    , TextButton
    , Input
    , Select
    
};

class LoaderComponent  {
    constructor (className,MyClass,path,prepend = false,callback=false) {
        return new classes[className](MyClass,path,prepend,callback);
    }
}

export default LoaderComponent;
