import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname,'..','..','uploads'),
        filename: (request, file, cb) =>{
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })
};

/*
{
	"name": "Lar das meninas",
	"latitude": -27.2134338,
	"longitude": -48.828111,
	"about": "Sobre o orfanato",
	"instructions": "Venha visitar",
	"opening_hours": "das 8h ate 18h",
	"open_on_weekends": true
}

*/