import json
from flask import Flask
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)
HOST = open("db_ip_addr").read().rstrip()
PORT = "5432"

@app.route('/')
def index():
    return json.dumps({'msg': "success"})



@app.route('/users')
def all_users():
    with psycopg2.connect(
        host=HOST,
        port=PORT,
        database="people",
        user="postgres",
        password="password") as conn:
        with conn.cursor() as cur:
            cur.execute("select * from users")
            result = cur.fetchall()
            print(result)
    conn.close()
    return json.dumps({'info': result if result else "Try again later..."})




@app.route('/<id>')
def single_user(id):
    with psycopg2.connect(
        host=HOST,
        port=PORT,
        database="people",
        user="postgres",
        password="password") as conn:
        with conn.cursor() as cur:
            cur.execute(f"select * from users where user_id ={id}")
            result = cur.fetchall()
            print(result)
    conn.close()
    return json.dumps({'info': result if result else "Try again later..."})


@app.route('/owners/<id>/pets')
def single_user_pets(id):
    with psycopg2.connect("dbname=pet_app") as conn:
        with conn.cursor() as cur:
            cur.execute(f"select * from app_user join pet on pet.pet_owner = app_user.id where app_user.id = {id}")
            result = cur.fetchone()
            print(result, 'owners/id/pets')
    conn.close()
    return json.dumps({'info': result if result else "Try again later..."})

app.run(host='0.0.0.0', port=8000, debug=True)
