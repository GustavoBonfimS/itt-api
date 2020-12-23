import Image from '../models/Image';

export default {
    render(image: Image): Image {
        image.text = image.text.replace(/\n/g, ' ');
        return {
            originalName: image.originalName,
            text: image.text,
            url: `http://${process.env.SERVER_IP}:3333/uploads/${image.path}`
        }
    }
}