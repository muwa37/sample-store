const { v4 } = require('uuid');
const { resolve } = require('path');
const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = v4() + '.jpg';
      img.mv(resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const { brandId, typeId } = req.query;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAll();
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({ where: { typeId } });
    }
    if (brandId && !typeId) {
      devices = await Device.findAll({ where: { brandId } });
    }
    if (brandId && typeId) {
      devices = await Device.findAll({ where: { typeId, brandId } });
    }
    return res.json(devices);
  }
  async getOne(req, res) {}
}

module.exports = new DeviceController();
