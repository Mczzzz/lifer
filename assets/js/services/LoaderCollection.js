import Container from '../collections/ContainerCollection.js';
import ObjectInfos from '../collections/ObjectInfosCollection.js';
import ObjectInfosResourcesType from '../collections/ObjectInfosResourcesCollection.js';
import ObjectTree from '../collections/ObjectTreeCollection.js';

const classes = {
    Container,
    ObjectInfos,
    ObjectInfosResources,
    ObjectTree
};

class LoaderCollection  {
    constructor (className) {
        return new classes[className]();
    }
}

export default LoaderCollection;
