from app import app, db
from flask import request, jsonify
from models import Link


# CRUD
# Get All Links
@app.route("/api/links", methods=["GET"])
def get_links():
    links = Link.query.all()
    result = [link.to_json() for link in links]
    return jsonify(result)


# Create a friend
@app.route("/api/links", methods=["POST"])
def create_link():
    try:
        data = request.json

        # Validations
        required_fields = ['description', 'url']
        for field in required_fields:
            if field not in data:
                return jsonify({"error":f"Missing required field: {field}"}), 400
    
        description = data.get('description')
        url = data.get('url')

        new_link = Link(description=description, url=url)

        db.session.add(new_link)
        db.session.commit()

        return jsonify(new_link.to_json()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    

# Delete a link
@app.route("/api/links/<int:id>", methods=['DELETE'])
def delete_link(id):
    try:
        link = Link.query.get(id)
        if link is None:
            return jsonify({"error":"Link was not found"}), 404
        
        db.session.delete(link)
        db.session.commit()

        return jsonify({"error":"Link deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    

# Update a link
@app.route("/api/links/<int:id>", methods=['PATCH'])
def update_friend(id):
    try:
        link = Link.query.get(id)
        if link is None:
            return jsonify({"error":"Link not found"}), 404
        
        data = request.json

        link.description = data.get('description', link.description)
        link.url = data.get('url', link.url)

        db.session.commit()
        return jsonify(link.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500