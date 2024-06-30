import pool from "../config/index.js";


try {
  await pool.query('SELECT NOW()');
  console.log('Database connection successful');
} catch (error) {
  console.error('Database connection error:', error);
}


export const getData = async () => {

  try {
    
      const { rows } = await pool.query('SELECT * FROM posts');
      
    
      return rows;
    ;
    
  } catch (error) {
    return error.message
  }

}


export const insertData = async (post) => {
  const { titulo, img, descripcion } = post
  console.log(post)
  try {
    const query = `INSERT INTO posts(titulo, img, descripcion,likes) VALUES($1, $2, $3,$4)`
    const values = [titulo, img, descripcion,0]
    const res = await pool.query(query, values)
    console.log("[RESPUESTA DB]: ", res.rows);
    if (res.rowCount > 0) return 'Imagen agregadada correctamente'
  } catch (error) {
    console.log("[EROR]: ", error.message);
    return error.message
  }
}
