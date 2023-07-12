from flask import Flask , render_template, request
import cv2
import numpy as np
from sklearn.metrics import pairwise_distances
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    try:
        file1 = request.files['image1']
        file2 = request.files['image2']
        file1.save('uploads/' + file1.filename)
        file2.save('uploads/' + file2.filename)

# De    fine the occasion and its associated color scheme
        occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

        # Extract color information from the wardrobe
        wardrobe = ["uploads/"+file1.filename,"uploads/"+file2.filename]  # Example dress images in the wardrobe , 'b.jpg', 'c.jpg'
        uphr=cv2.CascadeClassifier("fbxml.xml")

        # frhr=cv.CascadeClassifier("frxml.xml")
        # image=cv.imread("a.jpg")
        # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

        scores = []
        for dress_image in wardrobe:
            # Load dress image
            img=cv2.imread(dress_image)
            # img1=cv2.resize(dress_image,(200,400))
            imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            fbfc=uphr.detectMultiScale(imggr,scaleFactor=1.1,minNeighbors=3)


            for(x,y,u,v) in fbfc:
                cv2.rectangle(img,(x,y),(x+u,y+v),(0,255,0),thickness=2)
                img=img[y:y+v,x:x+u]






            # cv2.imshow("im",img)


            cv2.waitKey(0)
            # Extract dominant colors from the image
            colors = np.unique(img.reshape(-1, 3), axis=0)

            # Calculate the average distance to the occasion color scheme
            distances = pairwise_distances(colors, occasion_color_scheme, metric='euclidean')
            avg_distance = np.mean(np.min(distances, axis=1))

            scores.append(avg_distance)
            print(avg_distance)

        # Select the dress with the highest score
        best_dress_index = np.argmax(scores)
        best_dress = wardrobe[best_dress_index]
        r=best_dress[8:-3]

        # Process the file here (e.g., save it, perform some operations on it, etc.)
        return "<html><body style='background-color:grey;color:white;align-item:center'><h1>Best dress for the occasion:"+ r+"</h1></body></html>"
    except Exception :
        return "<html><body style='background-color:grey;color:white;align-item:center'><h1>Best dress for the occasion:  dress1 </h1></body></html>"


 
if __name__ == '__main__':
    app.run()
