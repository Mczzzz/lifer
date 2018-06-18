import Container from '../collections/ContainerCollection.js';
import ObjectInfos from '../collections/ObjectInfosCollection.js';
import ObjectInfosResourcesType from '../collections/ObjectInfosResourcesTypeCollection.js';
import ObjectTree from '../collections/ObjectTreeCollection.js';

const classes = {
    Container,
    ObjectInfos,
    ObjectInfosResourcesType,
    ObjectTree
};

class LoaderCollection  {
    constructor (className) {
        return new classes[className]();
    }
}

export default LoaderCollection;
