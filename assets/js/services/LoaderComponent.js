import Text   from '../views/elements/common/ui/card/elements/text.js';
import Image  from '../views/elements/common/ui/card/elements/image.js';
import Button from '../views/elements/common/ui/card/elements/button.js';
import TextButton from '../views/elements/common/ui/card/elements/textButton.js';

const classes = {
    Text,
    Image,
    Button,
    TextButton
};

class LoaderComponent  {
    constructor (className,parent, MyClass,path) {
        return new classes[className](parent, MyClass,path);
    }
}

export default LoaderComponent;
