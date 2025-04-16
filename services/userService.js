const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.getUserById = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*').eq('id', req.params.id);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').delete().eq('id', req.params.id);
        res.send(data);
    } catch (error) {
        console.error(error);
    }
}

exports.updateUserById = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').update(req.body).eq('id', req.params.id);
        res.send(data);
    } catch (error) {
        console.error(error);
    }
}