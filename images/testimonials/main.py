
import sys
from subprocess import call
from glob import glob
import tkinter as tk
from tkinter import filedialog
import os
from tqdm import tqdm

# open a prompt to select the folder
root = tk.Tk()
root.withdraw()
path = filedialog.askdirectory()

# open a prompt to enter the desired quality
quality = input("Enter the desired quality (0-100): ")

if int(quality) < 0 or int(quality) > 100:
    print("Image quality out of range [0-100] ;/:/")
    sys.exit(0)

img_list = []
jpg_count = 0
png_count = 0
jpeg_count = 0
bmp_count = 0
tiff_count = 0
for dirpath, _, filenames in os.walk(path):
    for img_name in filenames:
        # one can use more image types(bmp,tiff,gif)
        if img_name.endswith(".jpg"):
            jpg_count += 1
        elif img_name.endswith(".png"):
            png_count += 1
        elif img_name.endswith(".jpeg"):
            jpeg_count += 1
        elif img_name.endswith(".bmp"):
            bmp_count += 1
        elif img_name.endswith(".tiff") or img_name.endswith(".tif"):
            tiff_count += 1
        else:
            continue
        # extract images name(image_name.[jpg|png]) from the full path
        img_list.append(os.path.join(dirpath, img_name))

with tqdm(total=len(img_list), desc="Compressing Images") as pbar:
    for img_name in img_list:
        # though the chances are very less but be very careful when modifying the below code
        cmd='cwebp \"'+img_name+'\" -q '+quality+' -o \"'+os.path.splitext(img_name)[0]+'.webp\"'
        # running the above command
        call(cmd, shell=False)
        pbar.update(1)

print("Compression completed!\n")
print(f"The compressor converted and compressed {jpg_count} .jpg, {png_count} .png, {jpeg_count} .jpeg, {bmp_count} .bmp, and {tiff_count} .tiff files.")

input("Press Enter to exit...")
