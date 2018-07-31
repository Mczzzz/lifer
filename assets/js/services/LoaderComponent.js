import Text   from '../views/elements/common/ui/card/elements/text.js';
import Image  from '../views/elements/common/ui/card/elements/image.js';
import Button from '../views/elements/common/ui/card/elements/button.js';

const classes = {
    Text,
    Image,
    Button
};

class LoaderComponent  {
    constructor (className,parent, MyClass,path) {
        return new classes[className](parent, MyClass,path);
    }
}

export default LoaderComponent;
