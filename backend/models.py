from app import db
from datetime import date


class Link(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    url = db.Column(db.String(2048), nullable=False)
    date_added = db.Column(db.Date, default=date.today, nullable=False)

    def to_json(self):
        return {
            "id":self.id,
            "description":self.description,
            "url":self.url,
            "date_added":self.date_added.isoformat()
        }
