import os
import sys

def git_push_all(message):
    os.system('git add .')
    os.system(f'git commit --allow-empty -m "{message}"')
    os.system('git push origin main')

if __name__ == '__main__':
    message = sys.argv[1]
    git_push_all(message)

