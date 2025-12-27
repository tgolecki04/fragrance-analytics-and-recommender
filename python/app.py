import random
import sys
import json

class RandomClusterModel:
    def predict(self, row):
        return random.choice(row)

def main():
    # wczytanie danych z stdin
    input_data = sys.stdin.read()
    row = json.loads(input_data)

    model = RandomClusterModel()
    chosen = model.predict(row)
    print(chosen)

if __name__ == "__main__":
    main()
