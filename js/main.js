import {createGallery} from './mock-data.js';
import { thumbnails } from './thumbnails.js';
import { gallery } from './gallery.js';
import './form.js';

const photos = createGallery();
thumbnails(photos);
gallery(photos);
