const controller = {
  list : async (req, res) => {
    await req.getConnection((err, conn) => {
      conn.query('SELECT * FROM user', (err, user) => {
        if (err) {
          res.json(err);
        }
        res.render('userTable', {
            data: user
        })
      })
    })
  },

  save : async (req, res) => {
    const data = req.body;
    await req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO user set ?', data, (err, user) => {
        res.redirect('/');
      })
    })
  },

  edit : async (req, res) => {
    const { id } = req.params;
    await req.getConnection((err, conn) => {
      conn.query("SELECT * FROM user WHERE id = ?", [id], (err, rows) => {
        res.render('user_edit', {
          data: rows[0]
        })
      });
    });
  },

  update : async (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    await req.getConnection((err, conn) => {
      conn.query('UPDATE user set ? where id = ?', [newUser, id], (err, rows) => {
        res.redirect('/');
      });
    });
  },

  delete : async (req, res) => {
    const { id } = req.params;
    await req.getConnection((err, connection) => {
      connection.query('DELETE FROM user WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }

};

module.exports = controller;
