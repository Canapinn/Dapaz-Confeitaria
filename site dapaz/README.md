# DaPaz Confeitaria Website

This is a Flask web application for the DaPaz Confeitaria site.

## Folder Structure

- `app.py`: Flask application entry point.
- `templates/`: Contains HTML templates.
- `static/`: Contains CSS, JavaScript, and image assets.

## Running the Application Locally

1. Ensure you have Python 3 installed.
2. (Optional but recommended) Create and activate a virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate    # On Windows
   source venv/bin/activate # On Linux/Mac
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```
5. Open your browser and go to `http://localhost:5000`.

## Saving the Project to a Notebook

- Copy the entire project folder preserving the structure (`app.py`, `templates/`, `static/`, etc.)
- Ensure your notebook has Python 3 and Flask installed.
- Follow the Running instructions above on your notebook.

## Uploading to GitHub

1. Initialize git repository (if not already initialized):
   ```bash
   git init
   ```
2. Add all files:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Initial commit of DaPaz Confeitaria site"
   ```
4. Add your remote repository and push:
   ```bash
   git remote add origin YOUR_GIT_REPO_URL
   git push -u origin main
   ```
   
> The `.gitignore` file is configured to ignore virtual environment folders, system files, and node_modules.

## Notes

- Static assets are served from the `static/` folder.
- Templates use Flask's `url_for` function to link static files properly.
- The app is configured to run on all interfaces (`0.0.0.0`) at port 5000 (or port defined in environment variable `PORT`).

If you have any questions or need assistance, feel free to ask!
