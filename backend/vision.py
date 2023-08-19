from ultralytics import YOLO

def image_ai(image_path):
    model = YOLO('/models/best.pt')
    result = model(image_path)
    return result