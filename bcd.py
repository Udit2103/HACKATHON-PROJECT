from flask import Flask
import cv2
import numpy as np
from sklearn.metrics import pairwise_distances
app = Flask(__name__)

@app.route('/')
def hello():

# Define the occasion and its associated color scheme
    occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

    # Extract color information from the wardrobe
    wardrobe = ['a.jpg', 'b.jpg', 'c.jpg']  # Example dress images in the wardrobe , 'b.jpg', 'c.jpg'
    uphr=cv2.CascadeClassifier("fbxml.xml")

    # frhr=cv.CascadeClassifier("frxml.xml")
    # image=cv.imread("a.jpg")
    # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

    scores = []
    for dress_image in wardrobe:
        # Load dress image
        img = cv2.imread(dress_image)
        imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        fbfc=uphr.detectMultiScale(imggr,scaleFactor=1.1,minNeighbors=3)


        for(x,y,u,v) in fbfc:
            cv2.rectangle(img,(x,y),(x+u,y+v),(0,255,0),thickness=2)
            img=img[y:y+v,x:x+u]




    

        cv2.imshow("im",img)


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

    print("Best dress for the occasion:", best_dress)
    return best_dress

if __name__ == '__main__':
    app.run()
