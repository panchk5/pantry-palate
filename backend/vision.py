from ultralytics import YOLO

def image_ai(image_path):

    model = YOLO('./models/best.pt')

    results = model(image_path)

    return results[0].tojson()

    # return 'hello'

