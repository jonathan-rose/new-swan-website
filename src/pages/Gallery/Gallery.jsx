import './gallery.css';
import ReactImageGallery from 'react-image-gallery';

const images = require.context('../../../public/images/content/gallery', true)
const imageList = images.keys().map(image => ({ original: images(image), thumbnail: (images(image))}));

export default function Gallery() {
  return (
    <ReactImageGallery 
    items={imageList}
    slideDuration={0} />
  )
}
