from flask import Flask , url_for
import cv2
import numpy as np
import os
from flask_cors import CORS
from sklearn.metrics import pairwise_distances
app = Flask(__name__)

CORS(app)

@app.route('/')

def hello():


    directory = 'cas/casual_pant/'  # Replace with the directory path

# Get all file names in the directory
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Print the file names
    wardrobe1=[]
    wardrobe2=[]
    for file_name in file_names:
        wardrobe1.append(file_name)
        print(file_name)
    directory = 'cas/casual_shirt/' 
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    for file_name in file_names:
        wardrobe2.append(file_name)
        print(file_name)

    # Define the occasion and its associated color scheme
    occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

    # Extract color information from the wardrobe
    
      # Example dress images in the wardrobe 
    # uphr=cv2.CascadeClassifier("https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_fullbody.xml")

    # frhr=cv.CascadeClassifier("frxml.xml")
    # image=cv.imread("a.jpg")
    # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

    scores = {}
    i=0
    j=0
    for dress_image1 in wardrobe1:
        
        for dress_image2 in wardrobe2:
            j=0
            # Load dress image

            img1 = cv2.imread('cas/casual_pant/'+ dress_image1)
            img2 = cv2.imread('cas/casual_shirt/' +dress_image2)
            
            img1=cv2.resize(img1,(400,400))
            img2=cv2.resize(img2,(400,400))

            img=cv2.vconcat([img1,img2])
            # cv2.imshow("im",img)
            # imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # cv2.imshow("ii",img)
            cv2.waitKey(0)
            # Extract dominant colors from the image
            colors = np.unique(img.reshape(-1, 3), axis=0)

            # Calculate the average distance to the occasion color scheme
            distances = pairwise_distances(colors, occasion_color_scheme, metric='euclidean')
            avg_distance = np.mean(np.min(distances, axis=1))

            scores[avg_distance]=[i,j]
            print(avg_distance)
            j=j+1
        i=i+1

    # Select the dress with the highest score
    myk=list(scores.keys())
    myk.sort()



    r="<h1>CASUALS</h1><ul>"
    if len(myk)-5>=0:
        best_s4 = scores[myk[len(myk)-5]]
        print("fifth Best pants for the occasion:", wardrobe1[best_s4[0]])
        print("fifth Best pants for the occasion:", wardrobe2[best_s4[1]])
        r+="<li>\n5)     shirt:   "+wardrobe1[best_s4[0]]+" <img src='cas/casual_pant/"+ wardrobe1[best_s4[0]]+"'>              \npant:   "+wardrobe2[best_s4[1]]+"<img src='cas/casual_shirt/"+ wardrobe2[best_s4[1]]+"'></li>"
    if len(myk)-4>=0:
        best_s3 = scores[myk[len(myk)-4]]
        print("forth Best pants for the occasion:", wardrobe1[best_s3[0]])
        print("forth Best pants for the occasion:", wardrobe2[best_s3[1]])
        r+="<li>\n4)     shirt:   "+wardrobe1[best_s3[0]]+" <img src='cas/casual_pant/"+ wardrobe1[best_s3[0]]+"'>              \npant:   "+wardrobe2[best_s3[1]]+"<img src='cas/casual_shirt/"+ wardrobe2[best_s3[1]]+"'></li>"
    if len(myk)-3>=0:
        best_s2 = scores[myk[len(myk)-3]]
        print("third Best shirt for the occasion:", wardrobe1[best_s2[0]])
        print("third Best pants for the occasion:", wardrobe2[best_s2[1]])
        r+="<li>\n3)     shirt:   "+wardrobe1[best_s2[0]]+" <img src='cas/casual_pant/"+ wardrobe1[best_s2[0]]+"'>              \npant:   "+wardrobe2[best_s2[1]]+"<img src='cas/casual_shirt/"+ wardrobe2[best_s2[1]]+"'></li>"
    if len(myk)-2 >=0:
        best_s1 = scores[myk[len(myk)-2]]
        print("second Best shirt for the occasion:", wardrobe1[best_s1[0]])
        print("second Best pants for the occasion:", wardrobe2[best_s1[1]])
        r+="<li>\n2)     shirt:   "+wardrobe1[best_s1[0]]+" <img src='cas/casual_pant/"+ wardrobe1[best_s1[0]]+"'>              \npant:   "+wardrobe2[best_s1[1]]+"<img src='cas/casual_shirt/"+ wardrobe2[best_s1[1]]+"'></li>"
    if len(myk)-1>=0:
        best_s = scores[myk[len(myk)-1]]
        print("Best shirt for the occasion:", wardrobe1[best_s[0]])
        print("\nBest pants for the occasion:", wardrobe2[best_s[1]])
        r+="<li>\n1)     shirt:   "+wardrobe1[best_s[0]]+" <img src='cas/casual_pant/"+ wardrobe1[best_s[0]]+"'>              \npant:   "+wardrobe2[best_s[1]]+"<img src='cas/casual_shirt/"+ wardrobe2[best_s[1]]+"'></li></ul>"
    
    directory = 'eth/ethnic_pant/'  # Replace with the directory path

# Get all file names in the directory
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Print the file names
    wardrobe1=[]
    wardrobe2=[]
    for file_name in file_names:
        wardrobe1.append(file_name)
        print(file_name)
    directory = 'eth/ethnic_shirt/' 
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    for file_name in file_names:
        wardrobe2.append(file_name)
        print(file_name)

    # Define the occasion and its associated color scheme
    occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

    # Extract color information from the wardrobe
    
      # Example dress images in the wardrobe 
    # uphr=cv2.CascadeClassifier("https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_fullbody.xml")

    # frhr=cv.CascadeClassifier("frxml.xml")
    # image=cv.imread("a.jpg")
    # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

    scores = {}
    i=0
    j=0
    for dress_image1 in wardrobe1:
        
        for dress_image2 in wardrobe2:
            j=0
            # Load dress image

            img1 = cv2.imread('eth/ethnic_pant/'+ dress_image1)
            img2 = cv2.imread('eth/ethnic_shirt/' +dress_image2)
            
            img1=cv2.resize(img1,(400,400))
            img2=cv2.resize(img2,(400,400))

            img=cv2.vconcat([img1,img2])
            # cv2.imshow("im",img)
            # imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # cv2.imshow("ii",img)
            cv2.waitKey(0)
            # Extract dominant colors from the image
            colors = np.unique(img.reshape(-1, 3), axis=0)

            # Calculate the average distance to the occasion color scheme
            distances = pairwise_distances(colors, occasion_color_scheme, metric='euclidean')
            avg_distance = np.mean(np.min(distances, axis=1))

            scores[avg_distance]=[i,j]
            print(avg_distance)
            j=j+1
        i=i+1

    # Select the dress with the highest score
    myk=list(scores.keys())
    myk.sort()

    r+="<br><br><br><br><h1>WESTERN</h1><ol>"
    if len(myk)-5>=0:
        best_s4 = scores[myk[len(myk)-5]]
        print("fifth Best pants for the occasion:", wardrobe1[best_s4[0]])
        print("fifth Best pants for the occasion:", wardrobe2[best_s4[1]])
        r+="<li>\n5)     shirt:    "+ wardrobe1[best_s4[0]]+"               \npant:    "+ wardrobe2[best_s4[1]]+"</li>"
    if len(myk)-4>=0:
        best_s3 = scores[myk[len(myk)-4]]
        print("forth Best pants for the occasion:", wardrobe1[best_s3[0]])
        print("forth Best pants for the occasion:", wardrobe2[best_s3[1]])
        r+="\n<li> 4)     shirt     "+ wardrobe1[best_s3[0]]+"               pant:        "+ wardrobe2[best_s3[1]]+"</li>"
    if len(myk)-3>=0:
        best_s2 = scores[myk[len(myk)-3]]
        print("third Best shirt for the occasion:", wardrobe1[best_s2[0]])
        print("third Best pants for the occasion:", wardrobe2[best_s2[1]])
        r+="\n<li> 3)      shirt:    "+ wardrobe1[best_s2[0]]+"\n             pant:       "+wardrobe2[best_s2[1]]+"</li>"
    if len(myk)-2 >=0:
        best_s1 = scores[myk[len(myk)-2]]
        print("second Best shirt for the occasion:", wardrobe1[best_s1[0]])
        print("second Best pants for the occasion:", wardrobe2[best_s1[1]])
        r+=  "<li>2)      shirt:    "+ wardrobe1[best_s1[0]]+"                pants       "+ wardrobe2[best_s1[1]]+"</li>"
    if len(myk)-1>=0:
        best_s = scores[myk[len(myk)-1]]
        print("Best shirt for the occasion:", wardrobe1[best_s[0]])
        print("\nBest pants for the occasion:", wardrobe2[best_s[1]])
        r+= "<li>\n1)      shirt:    "+ wardrobe1[best_s[0]]+" \n             pant:      "+ wardrobe2[best_s[1]]+"</li></ol>"
    
    
    

    directory = 'for/formal_pant/'  # Replace with the directory path

# Get all file names in the directory
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Print the file names
    wardrobe1=[]
    wardrobe2=[]
    for file_name in file_names:
        wardrobe1.append(file_name)
        print(file_name)
    directory = 'for/formal_shirt/' 
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    for file_name in file_names:
        wardrobe2.append(file_name)
        print(file_name)

    # Define the occasion and its associated color scheme
    occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

    # Extract color information from the wardrobe
    
      # Example dress images in the wardrobe 
    # uphr=cv2.CascadeClassifier("https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_fullbody.xml")

    # frhr=cv.CascadeClassifier("frxml.xml")
    # image=cv.imread("a.jpg")
    # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

    scores = {}
    i=0
    j=0
    for dress_image1 in wardrobe1:
        
        for dress_image2 in wardrobe2:
            j=0
            # Load dress image

            img1 = cv2.imread('for/formal_pant/'+ dress_image1)
            img2 = cv2.imread('for/formal_shirt/' +dress_image2)
            
            img1=cv2.resize(img1,(400,400))
            img2=cv2.resize(img2,(400,400))

            img=cv2.vconcat([img1,img2])
            # cv2.imshow("im",img)
            # imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # cv2.imshow("ii",img)
            cv2.waitKey(0)
            # Extract dominant colors from the image
            colors = np.unique(img.reshape(-1, 3), axis=0)

            # Calculate the average distance to the occasion color scheme
            distances = pairwise_distances(colors, occasion_color_scheme, metric='euclidean')
            avg_distance = np.mean(np.min(distances, axis=1))

            scores[avg_distance]=[i,j]
            print(avg_distance)
            j=j+1
        i=i+1

    # Select the dress with the highest score
    myk=list(scores.keys())
    myk.sort()
    
    
    
    
    
    r+="<br><br><br><br><h1>FORMALS</h1><ul>"
    if len(myk)-5>=0:
        best_s4 = scores[myk[len(myk)-5]]
        print("fifth Best pants for the occasion:", wardrobe1[best_s4[0]])
        print("fifth Best pants for the occasion:", wardrobe2[best_s4[1]])
        r+="<li>\n5)     shirt:    "+ wardrobe1[best_s4[0]]+"               \npant:    "+ wardrobe2[best_s4[1]]+"</li>"
    if len(myk)-4>=0:
        best_s3 = scores[myk[len(myk)-4]]
        print("forth Best pants for the occasion:", wardrobe1[best_s3[0]])
        print("forth Best pants for the occasion:", wardrobe2[best_s3[1]])
        r+="\n<li> 4)     shirt     "+ wardrobe1[best_s3[0]]+"               pant:        "+ wardrobe2[best_s3[1]]+"</li>"
    if len(myk)-3>=0:
        best_s2 = scores[myk[len(myk)-3]]
        print("third Best shirt for the occasion:", wardrobe1[best_s2[0]])
        print("third Best pants for the occasion:", wardrobe2[best_s2[1]])
        r+="\n<li> 3)      shirt:    "+ wardrobe1[best_s2[0]]+"\n             pant:       "+wardrobe2[best_s2[1]]+"</li>"
    if len(myk)-2 >=0:
        best_s1 = scores[myk[len(myk)-2]]
        print("second Best shirt for the occasion:", wardrobe1[best_s1[0]])
        print("second Best pants for the occasion:", wardrobe2[best_s1[1]])
        r+=  "<li>2)      shirt:    "+ wardrobe1[best_s1[0]]+"                pants       "+ wardrobe2[best_s1[1]]+"</li>"
    if len(myk)-1>=0:
        best_s = scores[myk[len(myk)-1]]
        print("Best shirt for the occasion:", wardrobe1[best_s[0]])
        print("\nBest pants for the occasion:", wardrobe2[best_s[1]])
        r+= "<li>\n1)      shirt:    "+ wardrobe1[best_s[0]]+" \n             pant:      "+ wardrobe2[best_s[1]]+"</li></ul>"
    
    

    directory = 'wes/western_pant/'  # Replace with the directory path

# Get all file names in the directory
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Print the file names
    wardrobe1=[]
    wardrobe2=[]
    for file_name in file_names:
        wardrobe1.append(file_name)
        print(file_name)
    directory = 'wes/western_shirt/' 
    file_names = [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    for file_name in file_names:
        wardrobe2.append(file_name)
        print(file_name)

    # Define the occasion and its associated color scheme
    occasion_color_scheme = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # Example color scheme: red, green, blue

    # Extract color information from the wardrobe
    
      # Example dress images in the wardrobe 
    # uphr=cv2.CascadeClassifier("https://github.com/opencv/opencv/blob/master/data/haarcascades/haarcascade_fullbody.xml")

    # frhr=cv.CascadeClassifier("frxml.xml")
    # image=cv.imread("a.jpg")
    # gray=cv.cvtColor(image,cv.COLOR_BGR2GRAY)

    scores = {}
    i=0
    j=0
    for dress_image1 in wardrobe1:
        
        for dress_image2 in wardrobe2:
            j=0
            # Load dress image

            img1 = cv2.imread('wes/western_pant/'+ dress_image1)
            img2 = cv2.imread('wes/western_shirt/' +dress_image2)
            
            img1=cv2.resize(img1,(400,400))
            img2=cv2.resize(img2,(400,400))

            img=cv2.vconcat([img1,img2])
            # cv2.imshow("im",img)
            # imggr = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            # cv2.imshow("ii",img)
            cv2.waitKey(0)
            # Extract dominant colors from the image
            colors = np.unique(img.reshape(-1, 3), axis=0)

            # Calculate the average distance to the occasion color scheme
            distances = pairwise_distances(colors, occasion_color_scheme, metric='euclidean')
            avg_distance = np.mean(np.min(distances, axis=1))

            scores[avg_distance]=[i,j]
            print(avg_distance)
            j=j+1
        i=i+1

    # Select the dress with the highest score
    myk=list(scores.keys())
    myk.sort()
    
    r+="<br><br><br><br><h1>ETHENIC</h1><ul>"
    if len(myk)-5>=0:
        best_s4 = scores[myk[len(myk)-5]]
        print("fifth Best pants for the occasion:", wardrobe1[best_s4[0]])
        print("fifth Best pants for the occasion:", wardrobe2[best_s4[1]])
        r+="<li>\n5)     shirt:    "+ wardrobe1[best_s4[0]][0:-4]+"               \npant:    "+ wardrobe2[best_s4[1]][0:-4]+"</li>"
    if len(myk)-4>=0:
        best_s3 = scores[myk[len(myk)-4]]
        print("forth Best pants for the occasion:", wardrobe1[best_s3[0]])
        print("forth Best pants for the occasion:", wardrobe2[best_s3[1]])
        r+="\n<li> 4)     shirt     "+ wardrobe1[best_s3[0]][0:-4]+"               pant:        "+ wardrobe2[best_s3[1]][0:-4]+"</li>"
    if len(myk)-3>=0:
        best_s2 = scores[myk[len(myk)-3]]
        print("third Best shirt for the occasion:", wardrobe1[best_s2[0]])
        print("third Best pants for the occasion:", wardrobe2[best_s2[1]])
        r+="\n<li> 3)      shirt:    "+ wardrobe1[best_s2[0]][0:-4]+"\n             pant:       "+wardrobe2[best_s2[1]][0:-4]+"</li>"
    if len(myk)-2 >=0:
        best_s1 = scores[myk[len(myk)-2]]
        print("second Best shirt for the occasion:", wardrobe1[best_s1[0]])
        print("second Best pants for the occasion:", wardrobe2[best_s1[1]])
        r+=  "<li>2)      shirt:    "+ wardrobe1[best_s1[0]][0:-4]+"                pants       "+ wardrobe2[best_s1[1]][0:-4]+"</li>"
    if len(myk)-1>=0:
        best_s = scores[myk[len(myk)-1]]
        print("Best shirt for the occasion:", wardrobe1[best_s[0]])
        print("\nBest pants for the occasion:", wardrobe2[best_s[1]])
        r+= "<li>\n1)      shirt:    "+ wardrobe1[best_s[0]][0:-4]+" \n             pant:      "+ wardrobe2[best_s[1]][0:-4]+"</li></ul>"
    print(r)
    return r
    
    

    

if __name__ == '__main__':
    app.run(port=8000)

