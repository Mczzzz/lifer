/*import Container from '../collections/ContainerCollection.js';
import ObjectInfos from '../collections/ObjectInfosCollection.js';
import ObjectInfosResources from '../collections/ObjectInfosResourcesCollection.js';
import ObjectTree from '../collections/ObjectTreeCollection.js';*/

import Note from '../collections/NoteCollection.js';

const classes = {
/*    Container,
    ObjectInfos,
    ObjectInfosResources,
    ObjectTree*/
    Note
};

class LoaderCollection  {
    constructor (className) {
        return new classes[className]();
    }
}

export default LoaderCollection;
