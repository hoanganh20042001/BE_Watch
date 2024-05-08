import { MoMoService } from './momo.service';
export declare class MomoController {
    private readonly momoService;
    constructor(momoService: MoMoService);
    getMessage(): string;
    scoreCoin(): string;
    scoreHeart(): string;
}
