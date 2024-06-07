import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const timeDifference = Math.floor((+new Date() - +new Date(value)) / 1000);

    let interval = Math.floor(timeDifference / 31536000);
    if (interval > 1) return `${interval} years ago`;

    interval = Math.floor(timeDifference / 2592000);
    if (interval > 1) return `${interval} months ago`;

    interval = Math.floor(timeDifference / 86400);
    if (interval > 1) return `${interval} days ago`;

    interval = Math.floor(timeDifference / 3600);
    if (interval > 1) return `${interval} hours ago`;

    interval = Math.floor(timeDifference / 60);
    if (interval > 1) return `${interval} minutes ago`;

    return `just now`;
  }
}
