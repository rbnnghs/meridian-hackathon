import base64
import json
import glob
import os

# Function to convert image to base64 and wrap in JSON format
def image_to_json(image_path):
    # Open the image file in binary mode
    with open(image_path, "rb") as image_file:
        # Encode the image as base64
        base64_string = base64.b64encode(image_file.read()).decode('utf-8')

    # Return a dictionary with the image name and data
    return {
        "image_name": os.path.basename(image_path),  # Get the image file name
        "image_data": base64_string
    }

# Function to process all jpg images in a directory and store in a single JSON object
def process_images_in_directory(directory):
    # Get all jpg files in the directory using glob
    image_files = glob.glob(os.path.join(directory, "*.jpg"))

    # Create an empty dictionary to hold all image data
    images_data = {}

    # Iterate over each image file and add to the images_data dictionary with index
    for index, image_file in enumerate(image_files):
        images_data[f"image_{index + 1}"] = image_to_json(image_file)

    # Return the complete dictionary as a JSON object
    return json.dumps(images_data, indent=4)

# Function to save the JSON data to a file
def save_json_to_file(json_data, output_file):
    with open(output_file, "w") as json_file:
        json_file.write(json_data)

# Example usage
directory_path = "meridian-hackathon/public/animal_jpg"  # Replace with the directory containing the images
output_file = "meridian-hackathon/public/images_data.json"  # The name of the output JSON file

# Process the images and get the JSON data
images_json = process_images_in_directory(directory_path)

# Save the JSON data to a file
save_json_to_file(images_json, output_file)

print(f"All image data has been saved to {output_file}")
