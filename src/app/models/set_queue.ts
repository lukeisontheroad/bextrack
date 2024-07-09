export type QueueItem = {
    id: number;
    name: string;
};

export class SetQueue {
    private items: Set<QueueItem>;
    private maxSize: number;

    constructor(maxSize: number = 3) {
        this.items = new Set<QueueItem>();
        this.maxSize = maxSize;
    }

    enqueue(item: QueueItem): void {
        if (this.isDuplicate(item)) {
            return; // Do not add duplicates
        }

        this.items.add(item);

        // Ensure the size limit is respected
        if (this.items.size > this.maxSize) {
            this.dequeue();
        }
    }

    isDuplicate(newItem: QueueItem): boolean {
        for (let item of this.items) {
            if (item.id === newItem.id) {
                return true;
            }
        }
        return false;
    }

    dequeue(): QueueItem | undefined {
        if (this.items.size === 0) {
            return undefined;
        }

        // Remove and return the first item
        const firstItem = this.items.values().next().value;
        this.items.delete(firstItem);
        return firstItem;
    }

    peek(): QueueItem | undefined {
        return this.items.size > 0 ? this.items.values().next().value : undefined;
    }

    getSize(): number {
        return this.items.size;
    }

    serialize(): string {
        return JSON.stringify({ items: Array.from(this.items), maxSize: this.maxSize });
    }

    static deserialize(data: string): SetQueue {
        if (!data) {
            return new SetQueue();
        }
        const parsedData = JSON.parse(data);
        const queue = new SetQueue(parsedData.maxSize);
        parsedData.items.forEach((item: QueueItem) => queue.enqueue(item));
        return queue;
    }

    toList(): QueueItem[] {
        return Array.from(this.items);
    }
}